import { uuid } from '@/utils/common';

export default () => ({
  isLoading: true,
  entries: [
    {
      id: uuid(),
      date: new Date().toDateString(),
      text: 'text1',
      pictur: null
    },
    {
      id: uuid(),
      date: new Date().toDateString(),
      text: 'text2',
      pictur: null
    },
    {
      id: uuid(),
      date: new Date().toDateString(),
      text: 'text3',
      pictur: null
    },
    {
      id: uuid(),
      date: new Date().toDateString(),
      text: 'text4',
      pictur: null
    },
  ]
})