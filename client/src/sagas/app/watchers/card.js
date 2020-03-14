import { all, takeLatest } from 'redux-saga/effects';

import {
  createCardService,
  deleteCardService,
  deleteCurrentCardService,
  moveCardService,
  updateCardService,
  updateCurrentCardService,
} from '../services';
import EntryActionTypes from '../../../constants/EntryActionTypes';

export default function*() {
  yield all([
    takeLatest(EntryActionTypes.CARD_CREATE, ({ payload: { listId, data } }) =>
      createCardService(listId, data),
    ),
    takeLatest(EntryActionTypes.CARD_UPDATE, ({ payload: { id, data } }) =>
      updateCardService(id, data),
    ),
    takeLatest(EntryActionTypes.CURRENT_CARD_UPDATE, ({ payload: { data } }) =>
      updateCurrentCardService(data),
    ),
    takeLatest(EntryActionTypes.CARD_MOVE, ({ payload: { id, listId, index } }) =>
      moveCardService(id, listId, index),
    ),
    takeLatest(EntryActionTypes.CARD_DELETE, ({ payload: { id } }) => deleteCardService(id)),
    takeLatest(EntryActionTypes.CURRENT_CARD_DELETE, () => deleteCurrentCardService()),
  ]);
}
