import React, { useState } from "react";
import { Menu } from "../components/Menu";
import { RiMenuFill } from "react-icons/ri";

export const Header = () => {
	const [isShowMenu, setIsShowMenu] = useState(false);

	const handleMenu = () => {
		setIsShowMenu(!isShowMenu);
	};

	return (
		<header>
			<div className="flex justify-between items-center bg-primary-dark text-white p-3 z-50">
				<p className="text-lg mx-auto font-bold">Dei</p>

				<button className="absolute right-3" onClick={handleMenu}>
					<RiMenuFill className="text-2xl" />
				</button>
			</div>

			{isShowMenu && <Menu />}
		</header>
	);
};
