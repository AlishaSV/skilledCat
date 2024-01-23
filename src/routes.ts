type TRoute = {
  grid: string;
  addForm: string;
};

type TRoutes = { [key: string]: TRoute };

export const ROUTES: TRoutes = {
  skill: {
    grid: '/skillsGrid',
    addForm: '/add/skill',
  },
  division: {
    grid: '/divisionGrid',
    addForm: '/add/division',
  },
  competition: {
    grid: '/competitionGrid',
    addForm: '/addCompetition',
  },
  user: {
    grid: '/UserGrid',
    addForm: '/addUser',
  },
};
