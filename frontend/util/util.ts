//백한테 보낼 시간! yyyy-MM-dd/hh:mm:ss

export default function getCurrentTime(): string {
  const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간
  const dateSplit = new Date(Date.now() + TIME_ZONE).toISOString().split('T');

  return dateSplit[0] + '/' + dateSplit[1].split('.')[0];
}