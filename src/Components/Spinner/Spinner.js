import React from "react";
import { ClassicSpinner } from "react-spinners-kit";

export default function Spinner({ isLoading, align = 'flex-start' }) {

	const styles = {
		width: '100%',
		display: isLoading ? "flex" : 'none',
		justifyContent: align,
		margin: '2rem 0',
	};

	return <div style={styles}><ClassicSpinner size={25} color="#00bc8c" loading={isLoading} /></div>
}