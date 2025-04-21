export interface CertificateData {
  name: string;
  email: string;
  event: string;
  date: string;
}

export const validateEmail = async (email: string): Promise<CertificateData | null> => {
  try {
    const response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/YOUR_SHEET_ID/values/Sheet1?key=YOUR_API_KEY");
    const data = await response.json();

    const rows = data.values;
    if (!rows) return null;

    // Assuming header row and email in 2nd column
    const matchingRow = rows.find((row: string[]) => row[1] === email);

    if (!matchingRow) return null;

    return {
      name: matchingRow[0],
      email: matchingRow[1],
      event: matchingRow[2],
      date: matchingRow[3],
    };
  } catch (error) {
    console.error("Validation Error:", error);
    return null;
  }
};
