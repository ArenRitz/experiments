import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { HiBeaker } from 'react-icons/hi';

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 2,
			delayChildren: 0.1,
			staggerChildren: 0.2,
		},
	},
};

const listItemVariants: Variants = {
	hidden: { x: -200 },
	visible: {
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const Nav: React.FC = () => {
	const location = useLocation();

	const getListItemClass = (path: string) => {
		const inactive = 'text-white/50';
		const active = 'text-white';

		return location.pathname === path ? active : inactive;
	};

	return (
		<nav className='bg-violet-500 h-full text-center '>
			<div className='text-white'>
				<HiBeaker className='w-full text-[4rem] mt-4' />
				<p className='font-extrabold text-2xl'>Experiments</p>
				<hr className='m-4' />
			</div>
			<motion.ul
				className='flex flex-col gap-4  items-center text-2xl font-bold'
				variants={containerVariants}
				initial='hidden'
				animate='visible'
			>
				<motion.li
					className={'w-full ' + getListItemClass('/btn')}
					variants={listItemVariants}
					whileHover={{
						scale: 1.3,
						rotate: [0, 10, -10, 10, 0],
						transition: {
							duration: 0.5,
							repeat: Infinity,
							repeatType: 'reverse',
						},
					}}
				>
					<Link to='/btn'>Buttons</Link>
				</motion.li>
				<motion.li
					className={'w-full ' + getListItemClass('/card')}
					variants={listItemVariants}
                    whileHover={{
						scale: 1.3,
						rotate: [0, 10, -10, 10, 0],
						transition: {
							duration: 0.5,
							repeat: Infinity,
							repeatType: 'reverse',
						},
					}}
				>
					<Link to='/card'>Cards</Link>
				</motion.li>
			</motion.ul>
		</nav>
	);
};

export default Nav;
