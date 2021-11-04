interface iCommonResponseBodyContent {
  status: number;
  error?: string;
  data?: iObject | string;
}