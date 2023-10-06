import supabase from '../services/supabase';

const useUpdateDataById = async (id: number, newComment: string) => {
	try {
		const { error } = await supabase
			.from('mychep_data')
			.update({ comment: newComment })
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

export default useUpdateDataById;
