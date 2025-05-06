import rawData from "../data/Both-Workshop-Participation.json";

export interface CertificateData {
  name: string;
  email: string;
  contactNumber: string;
  university: string;
}

interface RawEntry {
  "Name (First and Last)": string;
  "Email": string;
  "Contact Number (WhatsApp number)": string;
  "University / Institute": string;
}

export const validateEmailAndContact = async (
  email: string,
  contactNumber: string
): Promise<CertificateData | null> => {
  try {
    const data: RawEntry[] = rawData;

    for (const entry of data) {
      if (
        entry.Email.trim().toLowerCase() === email.trim().toLowerCase() &&
        entry["Contact Number (WhatsApp number)"].trim() === contactNumber.trim()
      ) {
        return {
          name: entry["Name (First and Last)"].trim(),
          email: entry.Email.trim(),
          contactNumber: entry["Contact Number (WhatsApp number)"].trim(),
          university: entry["University / Institute"].trim(),
        };
      }
    }

    return null;
  } catch (error) {
    console.error("Validation Error:", error);
    return null;
  }
};
