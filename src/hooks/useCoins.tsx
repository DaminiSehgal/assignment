import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';
const PARAMS = {
  vs_currency: 'usd',
  order: 'market_cap_desc',
  per_page: 50,
  page: 1,
  sparkline: false,
};

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

export const useCoins = () => {
  return useQuery<Coin[]>({
    queryKey: ['coins'],
    queryFn: async () => {
      const { data } = await axios.get(API_URL, { params: PARAMS });
      return data;
    },
  });
};
