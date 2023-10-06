import supabase from '../services/supabase';

const useAddData = async (newData: {}) => {
	try {
		const { error } = await supabase.from('mychep_data').insert([newData]);

		if (error) {
			throw new Error(error.message);
		} else {
			window.location.reload();
			return;
		}
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default useAddData;
