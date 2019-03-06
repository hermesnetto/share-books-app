import * as React from 'react';
import {
  Modal,
  BaseField,
  TextField,
  Textarea,
  Button,
  Select,
  Option,
  FakeLoader
} from 'pipestyle';
import { IBookForm, ICategory } from '../types';

interface Props {
  fields: IBookForm;
  categories: ICategory[];
  savingBook?: boolean;
  fetchingBook?: boolean;
  onClose: () => void;
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

const BookForm: React.FC<Props> = ({
  onSubmit,
  onClose,
  onChange,
  fields,
  categories,
  savingBook,
  fetchingBook
}) => {
  const { title, description, image, author, category } = fields;

  if (fetchingBook) {
    return (
      <Modal onClose={onClose} size="sm">
        <Modal.Header title="Book" />
        <Modal.Content>
          <FakeLoader>
            <FakeLoader.Item type="photo" />
            <FakeLoader.Item type="half" />
            <FakeLoader.Item type="xs-small" />
            <FakeLoader.Item />
          </FakeLoader>
        </Modal.Content>
      </Modal>
    );
  }

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
          <BaseField label="Category">
            <Select name="category" value={category} onChange={onChange}>
              <Option value="">Choose a category</Option>
              {categories.map(({ id, title }) => (
                <Option key={id} value={id}>
                  {title}
                </Option>
              ))}
            </Select>
          </BaseField>
          <BaseField label="Author">
            <TextField name="author" value={author} onChange={onChange} />
          </BaseField>
          <BaseField label="Image URL">
            <TextField name="image" value={image} onChange={onChange} />
          </BaseField>
        </Modal.Content>
        <Modal.Footer>
          <Button theme="dark" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={savingBook}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default BookForm;
