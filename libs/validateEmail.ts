import rawData from "../data/Both-Workshop-Participation.json";
import rawDataActive from "../data/active_participation_without_position.json";

export interface CertificateData {
  name: string;
  email: string;
  contactNumber: string;
  university: string;
}

export interface CertificateDataActive{
  name: string;
  email: string;
  teamName: string;
}

interface RawEntry {
  "Name (First and Last)": string;
  "Email": string;
  "Contact Number (WhatsApp number)": string;
  "University / Institute": string;
}

interface RawEntryActive {
  "Team Name": string | null;
  "Number of Team Members": string | null;
  "Full Name (Team Leader)": string | null;
  "Email Address (Team Leader)": string | null;
  "Full Name (Member 1)": string | null;
  "Email Address (Member 1)": string | null;
  "Full Name (Member 2)": string | null;
  "Email Address (Member 2)": string | null;
  "Full Name (Member 3)": string | null;
  "Email Address (Member 3)": string | null;
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


export const validateEmailAndTeamName = async (
  email: string,
  teamName: string
): Promise<CertificateDataActive | null> => {
  try {
    const dataActive: RawEntryActive[] = rawDataActive;

    for (const entry of dataActive) {
      if (entry["Team Name"]?.trim() === teamName.trim()) {
        const emails = [
          entry["Email Address (Team Leader)"],
          entry["Email Address (Member 1)"],
          entry["Email Address (Member 2)"],
          entry["Email Address (Member 3)"],
        ].map((e) => e?.trim().toLowerCase());

        const matchedIndex = emails.findIndex(
          (e) => e === email.trim().toLowerCase()
        );

        if (matchedIndex !== -1) {
          const names = [
            entry["Full Name (Team Leader)"],
            entry["Full Name (Member 1)"],
            entry["Full Name (Member 2)"],
            entry["Full Name (Member 3)"],
          ];

          return {
            name: names[matchedIndex]?.trim() ?? '',
            email: email.trim(),
            teamName: teamName.trim(),
          };
        }
      }
    }

    return null;
  } catch (error) {
    console.error("Validation Error:", error);
    return null;
  }
};