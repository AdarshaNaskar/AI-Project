const pdfParse = require("pdf-parse");
const generateInterViewReport = require("../services/ai.services");
const interviewReportModel = require("../models/interviewReport.model");

async function generateInterViewReportController(req, res) {
  const resumeContent = pdfParse(req.file.buffer);
  const { selfdescription, jobdescription } = req.body;

  const interviewReportByAi = await generateInterViewReport({
    resume: resumeContent,
    selfdescription,
    jobdescription,
  });

  const interviewReport = await interviewReportModel.create({
    user: req.user.id,
    resume: resumeContent,
    selfdescription,
    jobdescription,
    technicalQuestion,
    ...interviewReportByAi,
  });

  res.status(201).json({
    message: "Interview Report generated successfully.",
    interviewReport,
  });
}

module.exports = { generateInterViewReportController };
