import "@/styles/globals.css";
import { Newsletter } from "@/components/Newsletter";
import { Suspense } from "react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Inter"
				/>
				<script src="https://cdn-eu.dynamicyield.com/api/12312/api_dynamic.js" />
			</head>
			<body>
				<main>{children}</main>
				<Suspense fallback={<div>Loading...</div>}>
					<Newsletter />
				</Suspense>
			</body>
		</html>
	);
}
