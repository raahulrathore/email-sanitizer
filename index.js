import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "./warehouse/email_list.txt");

// Function to read the file and parse unique emails
const parseUniqueEmails = async(filePath) =>{
  try {
    const data = await fs.readFile(filePath, "utf8");
    // Split the file content by new line and create a Set for unique emails
    const emailList = data
      .split("\n")
      .map((email) => email.trim())
      .filter(Boolean);
    const uniqueEmails = new Set(emailList);
    // Convert the Set back to an array to display the result
    const uniqueEmailArray = [...uniqueEmails];
    return uniqueEmailArray;
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

const getDomain = (email) => {
  const atIndex = email.lastIndexOf("@");
  return email.slice(atIndex + 1);
};

export const check = async (email) => {
  if (!email) {
    return false;
  }

  try {
    const emailList = await parseUniqueEmails(filePath);
    const domain = getDomain(email);
    return emailList.includes(domain);
  } catch (error) {
    return false;
  }
};
