import Link from "next/link";
import FullcycleImage from "./fullcycleImage";

const NavBar = () => (
	<nav className="fixed top-0 w-full bg-black text-yellow-400 shadow-lg p-4 z-50">
		<div className="container max-w-3xl mx-auto flex items-center justify-between">
			{/* Logo da FullCycle */}
			<Link href="https://imersao.fullcycle.com.br/desafio/imersao-19/criando-uma-aplicacao-nextjs">
				<FullcycleImage />
			</Link>

			{/* Título e Autor */}
			<div className="text-center">
				<h1 className="text-xl font-semibold text-yellow-400">
					Imersão FullCycle Desafio 1
				</h1>
				<p className="text-sm text-yellow-300">Autor: Igor Rodrigues Lage</p>
			</div>
		</div>
	</nav>
);

export default NavBar;
