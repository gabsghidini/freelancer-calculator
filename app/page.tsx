"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	/* Cost Rate */
	const [light, setLight] = useState<number>(0);
	const [water, setWater] = useState<number>(0);
	const [internet, setInternet] = useState<number>(0);
	const [rent, setRent] = useState<number>(0);
	const [hoursPerMonth, setHoursPerMonth] = useState<number>(0);
	const [profitMargin, setProfitMargin] = useState<number>(0);
	const [totalCosts, setTotalCosts] = useState<number>(0);

	/* Earning Rate */
	const [minHourlyRate, setMinHourlyRate] = useState<number>(0);
	const [hourlyRate, setHourlyRate] = useState<number>(0);
	const [hoursWorked, setHoursWorked] = useState<number>(0);
	const [totalEarnings, setTotalEarnings] = useState<number>(0);

	const calculateHourlyRate = () => {
		let totalCosts = light + water + internet + rent;
		const hourlyRate = parseFloat((totalCosts / hoursPerMonth).toFixed(2));
		const hourlyRateWithProfit = parseFloat(
			(hourlyRate + (hourlyRate * profitMargin) / 100).toFixed(2)
		);

		setTotalCosts(light + water + internet + rent);
		setMinHourlyRate(hourlyRateWithProfit);
		setHourlyRate(hourlyRateWithProfit);
	};

	const calculateEarnings = () => {
		const earnings = parseFloat((hourlyRate * hoursWorked).toFixed(2));
		setTotalEarnings(earnings);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 gap-2">
			<div className="bg-white p-8 rounded shadow-md w-full max-w-md">
				<h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
					Calculadora de Custo por Hora
				</h1>
				<div className="space-y-4">
					<div>
						<label
							htmlFor="light"
							className="block text-sm font-medium text-gray-700"
						>
							Luz
						</label>
						<input
							type="number"
							id="light"
							value={light}
							onChange={(e) =>
								setLight(parseFloat(e.target.value))
							}
							className="mt-1 block w-full text-gray-700 p-2 border border-gray-300 rounded-md"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="water"
							className="block text-sm font-medium text-gray-700"
						>
							Água
						</label>
						<input
							type="number"
							id="water"
							value={water}
							onChange={(e) =>
								setWater(parseFloat(e.target.value))
							}
							className="mt-1 block w-full text-gray-700 p-2 border border-gray-300 rounded-md"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="internet"
							className="block text-sm font-medium text-gray-700"
						>
							Internet
						</label>
						<input
							type="number"
							id="internet"
							value={internet}
							onChange={(e) =>
								setInternet(parseFloat(e.target.value))
							}
							className="mt-1 block w-full text-gray-700 p-2 border border-gray-300 rounded-md"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="rent"
							className="block text-sm font-medium text-gray-700"
						>
							Aluguel
						</label>
						<input
							type="number"
							id="rent"
							value={rent}
							onChange={(e) =>
								setRent(parseFloat(e.target.value))
							}
							className="mt-1 block w-full text-gray-700 p-2 border border-gray-300 rounded-md"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="hoursPerMonth"
							className="block text-sm font-medium text-gray-700"
						>
							Quantas horas você trabalha por mês aproximadamente?
						</label>
						<input
							type="number"
							id="hoursPerMonth"
							value={hoursPerMonth}
							onChange={(e) =>
								setHoursPerMonth(parseFloat(e.target.value))
							}
							className="mt-1 block w-full text-gray-700 p-2 border border-gray-300 rounded-md"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="profitMargin"
							className="block text-sm font-medium text-gray-700"
						>
							Quantas % você quer de lucro?
						</label>
						<input
							type="number"
							id="profitMargin"
							value={profitMargin}
							onChange={(e) =>
								setProfitMargin(parseFloat(e.target.value))
							}
							className="mt-1 block w-full text-gray-700 p-2 border border-gray-300 rounded-md"
							required
						/>
					</div>
					<button
						onClick={() => calculateHourlyRate()}
						className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
					>
						Calcular
					</button>
				</div>
				{minHourlyRate !== 0 && (
					<div className="mt-6 text-center">
						<p className="text-xl text-gray-700">
							Você tem um custo mensal de{" "}
							<span className="font-bold">R$ {totalCosts}</span>{" "}
							{""} e precisa cobrar no mínimo: {""}
							<span className="font-bold">
								R$ {minHourlyRate}
							</span>
						</p>
					</div>
				)}
			</div>
			<div className="bg-white p-8 rounded shadow-md w-full max-w-md">
				<h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
					Calculadora para Projetos
				</h1>
				<div className="space-y-4">
					<div>
						<label
							htmlFor="hourlyRate"
							className="block text-sm font-medium text-gray-700"
						>
							Taxa por Hora
						</label>
						<input
							type="number"
							id="hourlyRate"
							value={hourlyRate}
							onChange={(e) =>
								setHourlyRate(parseFloat(e.target.value))
							}
							className="mt-1 block w-full text-gray-700 p-2 border border-gray-300 rounded-md"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="hoursWorked"
							className="block text-sm font-medium text-gray-700"
						>
							Horas Trabalhadas
						</label>
						<input
							type="number"
							id="hoursWorked"
							value={hoursWorked}
							onChange={(e) =>
								setHoursWorked(parseFloat(e.target.value))
							}
							className="mt-1 block w-full text-gray-700 p-2 border border-gray-300 rounded-md"
							required
						/>
					</div>
					<button
						onClick={() => calculateEarnings()}
						className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
					>
						Calcular
					</button>
				</div>
				{totalEarnings !== 0 && (
					<div className="mt-6 text-center">
						<p className="text-xl text-gray-700">
							Custo do Projeto:{" "}
							<span className="font-bold">R${totalEarnings}</span>
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
