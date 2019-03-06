import * as React from 'react';
import { Modal, BaseField, TextField, Textarea, Button } from 'pipestyle';

interface Props {
  title: string;
  loading: boolean;
  onClose: () => void;
  onSubmit: (title: string) => Promise<void>;
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

const CategoryForm: React.FC<Props> = ({ onSubmit, onClose, onChange, title, loading }) => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal onClose={onClose} size="sm">
        <Modal.Header title="Category" />
        <Modal.Content>
          <BaseField label="Title">
            <TextField
              name="title"
              placeholder="Category title. e.g: Horror"
              value={title}
              onChange={onChange}
            />
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

export default CategoryForm;
