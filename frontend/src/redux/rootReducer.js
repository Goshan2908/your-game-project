export const AUTH = 'AUTH';
export const UPDATE = 'UPDATE';
export const LOADGAME = 'LOADGAME';
export const UPDATEGAME = 'UPDATEGAME';
export const RESTARTGAME = 'RESTARTGAME';


export const authAction = (args) => (
  {
    type: AUTH,
    payload: args
  })

export const updateAction = (args) => (
  {
    type: UPDATE,
    payload: args
  })

export const loadGameAction = (args) => {
  return {
    type: LOADGAME,
    payload: args
  }
}

export const updateGameAction = (args) => {
  return {
    type: UPDATEGAME,
    payload: args
  }
}

export const restartGameAction = () => {
  return {
    type: RESTARTGAME,
    payload: []
  }
}


const initialState = {
  team1: '',
  team2: '',
  rating1: 0,
  rating2: 0,
  isTeam1Active: true,
  game: [],
  activated: [],
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case AUTH:
      return {
        ...state,
        team1: payload.team1,
        rating1: payload.rating1,
        team2: payload.team2,
        rating2: payload.rating2,
        isTeam1Active: true,
      };
    case UPDATE:
      if (state.isTeam1Active) {
        return {
          ...state,
          rating1: state.rating1 + payload,
          isTeam1Active: false,
        }
      }
      return {
        ...state,
        rating2: state.rating2 + payload,
        isTeam1Active: true,
      }
    case LOADGAME:
      return { ...state, game: payload };

    case UPDATEGAME:
      return { ...state, activated: [...state.activated, payload] };

    case RESTARTGAME:
      return { ...state, activated: payload };

    default:
      return state
  }
}


export default reducer
