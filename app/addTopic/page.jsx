
import { addTopic } from "@/libs/actions";

const AddTopicPage = () => {
  return (
    <form action={addTopic} className="flex flex-col gap-3 ">
      <input
        required
        name="title"
        type="text"
        placeholder="Topic Title..."
        className="border border-slate-500 px-8 py-2"
      />
      <input
        required
        name="description"
        type="text"
        placeholder="Topic Description..."
        className="border border-slate-500 px-8 py-2"
      />
      <button
        type="submit"
        className={"bg-green-600 font-bold text-white py-3 px-6 w-fit"}
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopicPage;
