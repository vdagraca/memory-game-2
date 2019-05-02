import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Index, OneToMany, ManyToOne } from 'typeorm'
import User from '../users/entity'

export type Row = number[]
export type Board = Row[]
export type FlippedRow = boolean[]
export type FlippedBoard = FlippedRow[]

type Status = 'pending' | 'started' | 'finished'
const flipRow: FlippedRow = [false, false, false, false, false, false, false, false ]
const flipBoard: FlippedBoard = [flipRow, flipRow, flipRow, flipRow, flipRow, flipRow, flipRow]

@Entity()
export class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('json')
  board: Board

  @Column('char', { length: 1, default: 'x' })
  turn: Symbol

  @Column('char', { length: 1, nullable: true })
  winner: Symbol

  @Column('text', { default: 'pending' })
  status: Status

  @Column('json', {default: flipBoard, nullable: true})
  flipped: FlippedBoard

  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
  @OneToMany(_ => Player, player => player.game, { eager: true })
  players: Player[]
}

@Entity()
@Index(['game', 'user', 'symbol'], { unique: true })
export class Player extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => User, user => user.players)
  user: User

  @ManyToOne(_ => Game, game => game.players)
  game: Game

  @Column('char', { length: 1 })
  symbol: Symbol

  @Column('simple-array', {default: []})
  moves: number[]

  @Column('simple-array', {default: []})
  solved: number[]

  @Column('integer', { name: 'user_id' })
  userId: number
}
