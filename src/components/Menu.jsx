import React from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";

export const Menu = () => {
	const [open, cycleOpen] = useCycle(false, true);

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					exit={{ y: -100 }}
					className="bg-primary-light text-white p-5 -z-50"
				>
					<nav>
						<ul className="text-center">
							<li>Home</li>
							<li>About</li>
							<li>Projects</li>
						</ul>
					</nav>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
