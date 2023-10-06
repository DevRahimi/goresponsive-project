import supabase from '../services/supabase';

const useDeleteDataById = async (id: number) => {
	try {
		const { error } = await supabase
			.from('mychep_data')
			.delete()
			.match({ id });

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

export default useDeleteDataById;
