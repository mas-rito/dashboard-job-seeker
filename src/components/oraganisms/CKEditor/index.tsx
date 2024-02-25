// @flow
import postJobSchema from "@/lib/formSchemas/postJobSchema";
import * as React from "react";
import { z } from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";

type Props = {
  form: any;
  name: string;
  editorloaded?: boolean;
};
const CKEditor = ({ form, name, editorloaded }: Props) => {
  const editorRef = React.useRef<any>();
  const { CKEditor, ClassEditor } = editorRef.current || {};

  React.useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  return editorloaded ? (
    <div>
      <CKEditor
        editor={ClassEditor}
        data={form.getValues(name as keyof z.infer<typeof postJobSchema>)}
        onChange={(event: React.ChangeEvent, editor: typeof ClassEditor) => {
          const data = editor.getData();
          form.setValue(name as keyof z.infer<typeof postJobSchema>, data);
        }}
      />
      <FormField
        control={form.control}
        name={name as keyof z.infer<typeof postJobSchema>}
        render={({ field }) => (
          <FormItem>
            <FormMessage className="mt-3" />
          </FormItem>
        )}
      />
    </div>
  ) : (
    <div className="flex justify-center">
      <AiOutlineLoading3Quarters className="text-2xl text-primary animate-spin" />
    </div>
  );
};

export default CKEditor;
