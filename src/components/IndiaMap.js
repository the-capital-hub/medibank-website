"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const INDIA_TOPO_JSON = require("../components/Map/india.topo.json");

const PROJECTION_CONFIG = {
	scale: 1720,
	center: [82.9629, 22.5937],
};

const geographyStyle = {
	default: {
		outline: "none",
		fill: "#464646",
	},
	hover: {
		fill: "#d9d9d9",
		transition: "all 250ms",
		outline: "none",
	},
	pressed: {
		fill: "#d9d9d9",
		transition: "all 250ms",
		outline: "none",
	},
};

const getHeatMapData = () => [
	{
		id: "AP",
		state: "Andhra Pradesh",
		value: {
			Doctors: {
				"General Physician": 25,
				Dentist: 20,
				Cardiologist: 10,
				Dermatologist: 20,
			},
			Labs: {
				Pathology: 50,
				Radiology: 40,
				Biochemistry: 30,
				Microbiology: 25,
				Hematology: 15,
			},
			Hospitals: {
				Government: 15,
				Private: 10,
				Multispecialty: 5,
				"Children's": 7,
				Orthopedic: 8,
			},
		},
	},
];

const App = () => {
	const [data] = useState(getHeatMapData());
	const [activeTab, setActiveTab] = useState("Doctors");
	const [activeState, setActiveState] = useState(data[0]);
	const [currentPage, setCurrentPage] = useState(1);
	const [showAllSubcategories, setShowAllSubcategories] = useState(false); // New State

	const cardsPerPage = 12;
	const subcategories = activeState?.value[activeTab] || {};
	const subcategoryEntries = Object.entries(subcategories);
	const totalCards = Object.values(subcategories).reduce(
		(sum, count) => sum + count,
		0
	);
	const totalPages = Math.ceil(totalCards / cardsPerPage);
	const startIndex = (currentPage - 1) * cardsPerPage;
	const endIndex = startIndex + cardsPerPage;

	const handleStateClick = (geo) => {
		const current = data.find((state) => state.id === geo.id);
		if (current) {
			setActiveState(current);
			setCurrentPage(1);
			setShowAllSubcategories(false);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) setCurrentPage((prev) => prev - 1);
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
	};

	const toggleShowAllSubcategories = () => {
		setShowAllSubcategories((prev) => !prev);
	};

	const getIconForCategory = (tab) => {
		if (tab === "Doctors") return "/images/plus.png";
		if (tab === "Labs") return "/images/microscope.png";
		if (tab === "Hospitals") return "/images/hospital.png";
		return "/images/default-icon.png";
	};

	return (
		<div className="bg-gray-100 mt-[90px] min-h-screen flex flex-col justify-between">
			<div className="py-6">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold text-black">
						Our Partners in{" "}
						<span className="text-blue-500">{activeState?.state}</span>
					</h1>
				</div>
			</div>

			<div className="container mx-auto">
				{/* Tabs for Doctors, Labs, Hospitals */}
				<div className="flex justify-between items-center mb-4">
					<div className="flex space-x-8">
						{["Doctors", "Labs", "Hospitals"].map((tab) => (
							<button
								key={tab}
								onClick={() => setActiveTab(tab)}
								className={`py-2 px-4 font-semibold ${
									activeTab === tab
										? "text-blue-500 border-b-2 border-blue-500"
										: "text-gray-500"
								}`}
							>
								{tab}
							</button>
						))}
					</div>
				</div>

				<hr className="border-gray-300 mb-6" />

				{/* Subcategories Section */}
				<div className="flex flex-wrap sm:flex-nowrap text-center gap-4 bg-gray-100 py-3 rounded-md mb-6 shadow relative">
					{subcategoryEntries
						.slice(0, showAllSubcategories ? subcategoryEntries.length : 3)
						.map(([category, count], index) => (
							<p
								key={index}
								className="flex sm:items-center flex-col text-sm font-semibold text-gray-600"
							>
								<span>{category}</span>
								<span>
									(<span className="text-blue-500">{count}</span>)
								</span>
							</p>
						))}
					{subcategoryEntries.length > 4 && (
						<button
							className=" text-blue-500 font-semibold text-sm"
							onClick={toggleShowAllSubcategories}
						>
							{showAllSubcategories ? "Show Less" : "See More"}
						</button>
					)}
				</div>

				{/* Cards Section */}
				<div className="flex flex-col gap-8">
					<div className="md:w-4/5 w-full md:mb-8 mx-auto">
						<div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-2 lg:gap-6">
							{Object.entries(subcategories)
								.flatMap(([category, count]) =>
									Array(count)
										.fill(0)
										.map((_, index) => ({ category, index }))
								)
								.slice(startIndex, endIndex)
								.map(({ category, index }) => (
									<div
										key={`${category}-${index}`}
										className="bg-white shadow-md rounded-lg p-4 flex items-center"
									>
										<div className="w-30 h-30 rounded-full flex items-center justify-center ">
											<Image
												src={getIconForCategory(activeTab)}
												alt={`${category} Icon`}
												className="text-center"
												width="60"
												height="60"
												loading="lazy"
											/>
										</div>
										<div className="flex flex-col w-full">
											<div className="text-left">
												<p className="font-bold text-sm">{`${category}  #${
													index + 1
												}`}</p>
												<p className="text-xs text-gray-500">
													Details for {activeTab.toLowerCase()}
												</p>
											</div>
											<div className="mt-2 flex gap-2">
												<button className="bg-blue-500 text-white text-xs px-3 py-1 rounded">
													Book
												</button>
												<button className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded">
													Location
												</button>
											</div>
										</div>
									</div>
								))}
						</div>

						{/* Pagination */}
						<div className="my-12 flex justify-center items-center space-x-2 ">
							<button
								onClick={handlePrevPage}
								disabled={currentPage === 1}
								className={`px-4 py-2 rounded-full ${
									currentPage === 1
										? "bg-gray-300 text-gray-500"
										: "bg-blue-500 text-white"
								}`}
							>
								&lt;
							</button>
							<div className="flex space-x-2 w-full overflow-x-auto scrollbar-">
								{Array.from({ length: totalPages }, (_, i) => i + 1).map(
									(page) => (
										<button
											key={page}
											onClick={() => setCurrentPage(page)}
											className={`px-4 py-2 rounded-full ${
												currentPage === page
													? "bg-blue-500 text-white"
													: "bg-gray-200 text-gray-700"
											}`}
										>
											{page}
										</button>
									)
								)}
							</div>
							<button
								onClick={handleNextPage}
								disabled={currentPage === totalPages}
								className={`px-4 py-2 rounded-full ${
									currentPage === totalPages
										? "bg-gray-300 text-gray-500"
										: "bg-blue-500 text-white"
								}`}
							>
								&gt;
							</button>
						</div>
					</div>

					{/* Map Section */}
					<div className="md:w-3/5 w-full h-max bg-white shadow rounded-lg p-4 mb-10 lg:mx-auto">
						<ComposableMap
							projectionConfig={PROJECTION_CONFIG}
							projection="geoMercator"
							width={900}
							height={950}
						>
							<Geographies geography={INDIA_TOPO_JSON}>
								{({ geographies }) =>
									geographies.map((geo) => {
										const current = data.find((state) => state.id === geo.id);
										return (
											<Geography
												key={geo.rsmKey}
												geography={geo}
												style={geographyStyle}
												onClick={() => handleStateClick(geo)}
												className="cursor-pointer"
											/>
										);
									})
								}
							</Geographies>
						</ComposableMap>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
