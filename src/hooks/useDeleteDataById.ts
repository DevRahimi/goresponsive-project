import { useEffect, useState } from 'react';
import supabase from '../services/supabase';

const useDeleteDataById = (id: number) => {
	const [error, setError] = useState('');

	useEffect(() => {
		if (!id) return; // Return early if ID is not provided
		deleteData();
	}, []);

	const deleteData = async () => {
		try {
			const { error } = await supabase
				.from('mychep_data')
				.delete()
				.match({ id });

			if (error) {
				throw new Error(error.message);
			}
		} catch (error: Error | unknown) {
			setError((error as Error).message);
		}
	};

	return { error };
};

export default useDeleteDataById;
