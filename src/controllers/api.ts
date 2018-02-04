import { Request, Response, NextFunction } from 'express';
import * as uuid from 'uuid';
import * as moment from 'moment';

import { IBoard, IUser, IPost, ISearchResults } from '../lib/shared';

export const getUser = (req: Request, res: Response) => {
  const user: IUser = {
    id: req.params.id,
    username: 'hardcodedtestusername',
    displayname: 'Hardcoded Tester',
    email: 'test@test.com',
    date_created: moment().utc().format(),
    date_updated: moment().utc().format(),
  };
  return res.status(200).send(user);
};

export const getBoard = (req: Request, res: Response) => {
  const board: IBoard = {
    id: req.params.id,
    name: 'Hardcoded Test',
    date_created: moment().utc().format(),
    date_updated: moment().utc().format(),
  };
  return res.status(200).send(board);
};

export const getPosts = (req: Request, res: Response) => {
  const posts: ISearchResults<IPost> = {
    items: [
      {
        id: '1234', // uuid.v4(),
        title: 'First post',
        content: 'This is content. It is fancy.',
        chatId: '1235', // uuid.v4(),
        date_created: moment().utc().format(),
        date_updated: moment().utc().format(),
      }, {
        id: '5678', // uuid.v4(),
        title: 'Second post',
        content: 'This is content. It is fancier.',
        chatId: '5679', // uuid.v4(),
        date_created: moment().utc().format(),
        date_updated: moment().utc().format(),
      },
    ],
    total: 42,
  };
  return res.status(200).send(posts);
};
