import {
  tagConstants,
} from '../constants';

const saveTag = data => ({
  type: tagConstants.SAVE_TAG,
  payload: data,
});

const removeTag = tag => ({
  type: tagConstants.REMOVE_TAG,
  payload: tag,
});

export default ({ saveTag, removeTag });
