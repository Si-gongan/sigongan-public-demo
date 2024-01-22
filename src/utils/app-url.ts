import { UAParser } from 'ua-parser-js';

export const getOS = () => {
  const parser = new UAParser();
  const os = parser.getOS().name;
  /**
   * Possible 'os.name'
   * AIX, Amiga OS, Android, Arch, Bada, BeOS, BlackBerry, CentOS, Chromium OS, Contiki,
   * Fedora, Firefox OS, FreeBSD, Debian, DragonFly, Gentoo, GNU, Haiku, Hurd, iOS,
   * Joli, Linpus, Linux, Mac OS, Mageia, Mandriva, MeeGo, Minix, Mint, Morph OS, NetBSD,
   * Nintendo, OpenBSD, OpenVMS, OS/2, Palm, PCLinuxOS, Plan9, Playstation, QNX, RedHat,
   * RIM Tablet OS, RISC OS, Sailfish, Series40, Slackware, Solaris, SUSE, Symbian, Tizen,
   * Ubuntu, UNIX, VectorLinux, WebOS, Windows [Phone/Mobile], Zenwalk
   */
  return os;
};

export function getAppUrl(): string {
  const os = getOS();
  if (os === 'Android') {
    return 'https://play.google.com/store/apps/details?id=com.sigonggan.pickforme';
  } else if (os === 'iOS') {
    return 'https://itunes.apple.com/kr/app/app-store/id6450741514';
  } else {
    // TODO: App store로 연결할지, 앱 다운로드 관련 (배너/팝업/플로팅/디테일 페이지 버튼) 없앨지
    return 'https://itunes.apple.com/kr/app/app-store/id6450741514';
    // return '';
  }
}
