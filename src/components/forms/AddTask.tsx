import { observer } from "mobx-react-lite";
import Overlay from "../overlay/Overlay";
import TextInput from "../inputs/Text";
import TextArea from "../inputs/TextArea";
import { Field, Form } from "react-final-form";
import SelectInput from "../inputs/Select";
import { useStore } from "@/hooks/useStore";
import Button from "../buttons/Button";

function AddTaskForm() {
  const {
    boardsStore: { activeBoard },
  } = useStore();
  return (
    <Overlay>
      <div className="flex items-center justify-center w-full h-full">
        <Form
          onSubmit={console.log}
          initialValues={{}}
          render={({ handleSubmit }) => (
            <form
              onClick={(e) => e.stopPropagation()}
              className="w-[48rem] h-[67.5rem] rounded-[6px] p-[3.2rem] bg-white overflow-auto flex flex-col"
            >
              <h2 className="text-hL text-black mb-[2.4rem]">Add New Task</h2>
              <Field
                id="add__task__title"
                type="text"
                name="title"
                placeholder="e.g. Take coffee break"
                className="mb-[2.4rem]"
                label="Title"
                component={TextInput}
              />
              <Field
                id="add__task__description"
                name="description"
                placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
                className="mb-[2.4rem]"
                label="Description"
                component={TextArea}
              />
              <Field
                id="add__task__column_id"
                name="columnId"
                type="select"
                className="mb-[2.4rem]"
                label="Column"
                options={activeBoard?.columns}
                component={SelectInput}
              />

              <Button
                variant="primary"
                onClick={() => {}}
                text="Create Task"
                className="w-full"
              />
            </form>
          )}
        />
      </div>
    </Overlay>
  );
}

export default observer(AddTaskForm);
