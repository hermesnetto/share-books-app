import * as React from 'react';
import { Mutation } from 'react-apollo';
import { toast } from 'react-toastify';
import { Alert } from 'pipestyle';
import CategoryForm from '../components/CategoryForm';
import { CREATE_CATEGORY } from '../graphql/mutations';
import { CreateCategoryData, CreateCategoryVariables } from '../graphql/types';
import { closeModal } from '../store/actions';
import { Store } from '../Store';

interface IParams {
  variables: {
    title: string;
  };
}

interface ICreateCategory {
  (params: IParams): void;
}

interface ICloseModal {
  (): void;
}

interface Props {}

const handleCreateCategory = (
  createCategory: ICreateCategory,
  closeCategoryModal: ICloseModal
) => async (title: string) => {
  try {
    await createCategory({ variables: { title } });
    closeCategoryModal();
    toast(<Alert type="success" icon="check" message="Category successfully created!" />);
  } catch (e) {
    toast(<Alert type="danger" icon="alert" message={e.message} />);
  }
};

const CreateCategoryForm: React.FC<Props> = () => {
  const { dispatch } = React.useContext(Store);
  const [title, setTitle] = React.useState<string>('');

  const closeCategoryModal = (): void => dispatch(closeModal('category'));
  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>): void =>
    setTitle(e.currentTarget.value);

  return (
    <Mutation<CreateCategoryData, CreateCategoryVariables> mutation={CREATE_CATEGORY}>
      {(createCategory, { loading }) => (
        <CategoryForm
          onSubmit={handleCreateCategory(createCategory, closeCategoryModal)}
          onClose={closeCategoryModal}
          onChange={handleChange}
          loading={loading}
          title={title}
        />
      )}
    </Mutation>
  );
};

export default CreateCategoryForm;
