import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { NextResponse } from "next/server";

export async function GET() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]);
  
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  
  const primaryColor = rgb(0.13, 0.13, 0.13);
  const secondaryColor = rgb(0.4, 0.4, 0.4);
  const accentColor = rgb(0.45, 0.35, 0.8);
  
  let y = 780;
  
  page.drawText("Ian Andi Limawan", { x: 50, y, size: 28, font: boldFont, color: primaryColor });
  y -= 35;
  
  page.drawText("Fullstack Developer", { x: 50, y, size: 14, font, color: secondaryColor });
  y -= 25;
  
  page.drawText("ian.andilimawan@gmail.com | +62 85121107577 | Jakarta, Indonesia", { 
    x: 50, y, size: 10, font, color: secondaryColor 
  });
  page.drawText("linkedin.com/in/ian-andi-15427a237", { x: 50, y: y - 12, size: 10, font, color: secondaryColor });
  y -= 40;
  
  page.drawText("Passionate IT professional with strong problem-solving skills and a fast learning ability.", { 
    x: 50, y, size: 10, font, color: primaryColor 
  });
  y -= 15;
  page.drawText("Enjoys building clean, efficient code and delivering high-quality results on time.", { 
    x: 50, y, size: 10, font, color: primaryColor 
  });
  y -= 35;
  
  page.drawText("WORK EXPERIENCE", { x: 50, y, size: 12, font: boldFont, color: accentColor });
  y -= 22;
  
  const experiences = [
    { title: "Project Manager", company: "PT. Redbuzz Mediatama", period: "Aug 2023 - Present", desc: "Manage end-to-end software development projects using Agile methodologies (Scrum & Kanban). Collaborate with developers, designers, and QA to ensure timely and high-quality product delivery." },
    { title: "Lead Developer", company: "PT. Redbuzz Mediatama", period: "Jan 2023 - Aug 2023", desc: "Lead the design, development, and deployment of software applications. Supervise and mentor a team of developers, conducting code reviews and providing technical guidance." },
    { title: "Full Stack Developer", company: "PT. Redbuzz Mediatama", period: "Jan 2022 - Jan 2023", desc: "Create API and CMS according to client's request. Create UI from Figma design. Data integration from backend to frontend." },
    { title: "Frontend Developer", company: "PT. Anugrah Wijaya Raga", period: "Nov 2020 - Des 2021", desc: "Implement design from UI/UX Designer to website. Fetching data from API to FrontEnd Website." },
  ];
  
  for (const exp of experiences) {
    page.drawText(`${exp.title} | ${exp.company}`, { x: 50, y, size: 11, font: boldFont, color: primaryColor });
    y -= 15;
    page.drawText(exp.period, { x: 50, y, size: 9, font, color: secondaryColor });
    y -= 15;
    
    const words = exp.desc.split(" ");
    let line = "";
    for (const word of words) {
      if ((line + word + " ").length > 80) {
        page.drawText(line, { x: 50, y, size: 10, font, color: primaryColor });
        y -= 14;
        line = word + " ";
      } else {
        line += word + " ";
      }
    }
    page.drawText(line, { x: 50, y, size: 10, font, color: primaryColor });
    y -= 25;
  }
  
  page.drawText("SKILLS", { x: 50, y, size: 12, font: boldFont, color: accentColor });
  y -= 22;
  page.drawText("Frontend: React, Next.js, Angular, Vue, TypeScript, Laravel", { x: 50, y, size: 10, font, color: primaryColor });
  y -= 14;
  page.drawText("Backend: Node.js, Spring Boot, Go, Lumen, MySQL, PostgreSQL", { x: 50, y, size: 10, font, color: primaryColor });
  y -= 14;
  page.drawText("DevOps: CI/CD, Kubernetes, Docker, Git, Jira, Trello", { x: 50, y, size: 10, font, color: primaryColor });
  y -= 25;
  
  page.drawText("EDUCATION", { x: 50, y, size: 12, font: boldFont, color: accentColor });
  y -= 22;
  page.drawText("17 Agustus 1945 University, Surabaya", { x: 50, y, size: 11, font: boldFont, color: primaryColor });
  y -= 15;
  page.drawText("BA in Information Technology | 2016 - 2023 | IPK: 3.28", { x: 50, y, size: 10, font, color: primaryColor });
  
  const pdfBytes = await pdfDoc.save();
  
  return new NextResponse(Buffer.from(pdfBytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=CV-Ian-Andi-Limawan.pdf",
    },
  });
}
