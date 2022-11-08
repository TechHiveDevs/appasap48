
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowComments(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="body" />
<ReferenceField source="blogsid" reference="blogs" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}