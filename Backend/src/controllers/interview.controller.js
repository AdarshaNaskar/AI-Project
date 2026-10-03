const pdfParse = require("pdf-parse");
const generateInterViewReport = require("../services/ai.service");
const interviewReportModel = require("../models/interviewReport.model");

/**
 * @route POST /api/interview
 * @description Generate new interview report on the basis of user self description, resume pdf, job description
 */
async function generateInterViewReportController(req, res) {
  try {
    if (!req.file || !req.file.buffer) {
      return res.status(400).json({
        message: "Please upload a valid resume file (PDF).",
      });
    }

    const resumeContent = await new pdfParse.PDFParse(
      Uint8Array.from(req.file.buffer),
    ).getText();

    const { selfDescription, jobDescription } = req.body;

    const interviewReportByAi = await generateInterViewReport({
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
    });

    console.log("AI REPORT:", JSON.stringify(interviewReportByAi, null, 2));

    const interviewReport = await interviewReportModel.create({
      user: req.user.id,
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
      ...interviewReportByAi,
    });

    res.status(201).json({
      message: "Interview Report generated successfully.",
      interviewReport,
    });
  } catch (error) {
    console.error("Error generating interview report:", error);
    res.status(500).json({
      message: error.message || "An error occurred while generating the interview report.",
    });
  }
}

async function getInterviewReportByIdController(req, res) {
  const { interviewId } = req.params;

  const interviewReport = await interviewReportModel.findOne({
    _id: interviewId,
    user: req.user.id,
  });

  if (!interviewReport) {
    return res.status(404).json({
      message: "Interview report not found.",
    });
  }

  res.status(200).json({
    message: "Interview report fetched successfully",
    interviewReport,
  });
}

/**
 * @description Controller to get all interview reports of logged in user.
 */

async function getAllInterviewReportsController(req, res) {
  const interviewReports = await interviewReportModel
    .find({ user: req.user.id })
    .sort({ createdAt: -1 })
    .select(
      "-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan",
    );

  res.status(200).json({
    message: "Interview reports fetched successfully",
    interviewReports,
  });
}
module.exports = {
  generateInterViewReportController,
  getInterviewReportByIdController,
  getAllInterviewReportsController,
};
