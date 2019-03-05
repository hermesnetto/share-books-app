import * as React from 'react';
import { Modal, BaseField, TextField, Textarea, Button } from 'pipestyle';
import { IBookForm } from '../types';

interface Props {
  fields: IBookForm;
  loading: boolean;
  onClose: () => void;
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

const BookForm: React.FC<Props> = ({ onSubmit, onClose, onChange, fields, loading }) => {
  const { title, description, image, author, publisher, publicationDate } = fields;

  return (
    <form onSubmit={onSubmit}>
      <Modal onClose={onClose} size="sm">
        <Modal.Header title="Book" />
        <Modal.Content>
          <BaseField label="Title">
            <TextField
              name="title"
              placeholder="Book title. e.g: Call Of Cthulhu"
              value={title}
              onChange={onChange}
            />
          </BaseField>
          <BaseField label="Description">
            <Textarea name="description" value={description} onChange={onChange} />
          </BaseField>
          <BaseField label="Author">
            <TextField name="author" value={author} onChange={onChange} />
          </BaseField>
          <BaseField label="Publisher">
            <TextField name="publisher" value={publisher} onChange={onChange} />
          </BaseField>
          <BaseField label="Image">
            <TextField name="image" value={image} onChange={onChange} />
          </BaseField>
          <BaseField label="Publication Date">
            <TextField name="publicationDate" value={publicationDate} onChange={onChange} />
          </BaseField>
        </Modal.Content>
        <Modal.Footer>
          <Button theme="dark" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default BookForm;
