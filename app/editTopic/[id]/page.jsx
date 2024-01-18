import EditTopicForm from "@/components/EditTopicForm";
import { getTopic } from "@/libs/data";



const editTopic = async ({ params }) => {
  const { id } = params;
  const { title, description } = await getTopic(id);

  return <EditTopicForm id={id} title={title} description={description} />;
};

export default editTopic;
