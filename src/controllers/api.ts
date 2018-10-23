import { Request, Response, NextFunction } from 'express';
import * as uuid from 'uuid';
import * as moment from 'moment';

import { IBoard, IUser, IPost, ISearchResults } from '../lib/shared';
import { Board, IBoardInstance } from '../models/board';

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

export const getBoard = async (req: Request, res: Response) => {
  try {
    // TODO: Check for various access errors (401, 403, 404, etc)
    const dbResponse = await Board.findById(req.params.id);
    return res
      .status(200)
      .send(getBoardFromDataValues(dbResponse));
  } catch (err) {
    console.error(err);
    return res.status(500).send('Failed to retrieve board.');
  }
};

export const createBoard = async (req: Request, res: Response) => {
  // TODO: Check for various access errors (401, 403, 404, etc)
  try {
    const dbResponse = await Board.create({
      name: req.body.name,
    });
    return res
      .status(200)
      .send(getBoardFromDataValues(dbResponse));
  } catch (err) {
    console.error(err);
    return res.status(500).send('Failed to create board.');
    // TOOD: Provide better error responses?:
    // {
    //   'message': 'Something went wrong',
    //   'details': 'It was really bad.',
    // }
  }
};

const getBoardFromDataValues = (dbResponse: IBoardInstance): IBoard => ({
  id: dbResponse.dataValues.id,
  name: dbResponse.dataValues.name,
  date_created: dbResponse.dataValues.date_created,
  date_updated: dbResponse.dataValues.date_updated,
});

// export const updateBoard = async (req: Request, res: Response) => {
//   try {
//     const newBoard = await Board.find({});
//     return res.status(200).send(newBoard);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send('Failed to update board.');
//   }
// };

// export const deleteBoard = async (req: Request, res: Response) => {
//   try {
//     const newBoard = await Board.find({});
//     return res.status(200).send(newBoard);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send('Failed to delete board.');
//   }
// };

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
