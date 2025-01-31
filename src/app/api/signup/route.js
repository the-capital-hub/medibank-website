import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const SHEET_TITLE = "User  Data (Beta Access)";
const HEADER_VALUES = ["firstName", "lastName", "mobile", "email", "timestamp"];

async function initializeSheet(doc) {
	// Create a new sheet and set the header values
	const sheet = await doc.addSheet({ headerValues: HEADER_VALUES });

	// Set the title of the document
	await doc.updateProperties({ title: SHEET_TITLE });

	return sheet;
}

async function addUserData(sheet, userData) {
	// Add the new row with user data
	await sheet.addRow(userData);
}

export async function POST(req) {
	// Check if the request method is POST
	if (req.method !== "POST") {
		return new Response(JSON.stringify({ message: "Method not allowed" }), {
			status: 405,
			headers: { "Content-Type": "application/json" },
		});
	}

	const { firstName, lastName, mobile, email } = await req.json();

	try {
		// Create JWT client
		const serviceAccountAuth = new JWT({
			email: process.env.GOOGLE_CLIENT_EMAIL,
			key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
			scopes: ["https://www.googleapis.com/auth/spreadsheets"],
		});

		// Initialize the sheet
		const doc = new GoogleSpreadsheet(
			process.env.GOOGLE_SHEET_ID,
			serviceAccountAuth
		);

		// Load the document
		await doc.loadInfo();

		// Check if the first sheet exists
		let sheet = doc.sheetsByIndex[0];

		if (!sheet) {
			// If no sheet exists, initialize a new one
			sheet = await initializeSheet(doc);
		} else {
			// Load the header row to check if it exists
			await sheet.loadHeaderRow();

			// Check if the header row is correct
			const headers = sheet.headerValues;
			if (
				!headers ||
				headers.length === 0 ||
				!HEADER_VALUES.every((header) => headers.includes(header))
			) {
				// Set the header row if it doesn't match
				await sheet.setHeaderRow(HEADER_VALUES);
			}
		}

		// Prepare user data
		const userData = {
			firstName,
			lastName,
			mobile,
			email,
			timestamp: new Date().toISOString(),
		};

		// Add user data to the sheet
		await addUserData(sheet, userData);

		return new Response(JSON.stringify({ message: "Signup successful" }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Error during signup:", error);
		return new Response(
			JSON.stringify({
				message: "Failed to process signup",
				error: error.message,
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
