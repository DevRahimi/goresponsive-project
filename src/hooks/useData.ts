import { useEffect, useState } from 'react';
import { ChepData } from '../types/all.types';
import supabase from '../services/supabase';

const useData = () => {
	const [chepData, setChepData] = useState<ChepData[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		setLoading(true);

		try {
			let { data: chepData, error } = await supabase
				.from('mychep_data')
				.select('*')
				.order('id', { ascending: true });

			if (error) {
				throw new Error(error.message);
			} else {
				setChepData(chepData as ChepData[]);
				setLoading(false);
			}
		} catch (error: Error | unknown) {
			setError((error as Error).message);
		}
	};

	return { chepData, error, isLoading };
};

export default useData;
