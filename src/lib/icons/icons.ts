import Add from './Add.svelte';
import ArrowDown from './ArrowDown.svelte';
import ArrowLeft from './ArrowLeft.svelte';
import ArrowRight from './ArrowRight.svelte';
import ArrowUp from './ArrowUp.svelte';
import At from './At.svelte';
import Attach from './Attach.svelte';
import Bold from './Bold.svelte';
import BulletedList from './BulletedList.svelte';
import Business from './Business.svelte';
import Calendar from './Calendar.svelte';
import CaretDown from './CaretDown.svelte';
import CaretLeft from './CaretLeft.svelte';
import CaretRight from './CaretRight.svelte';
import CaretUp from './CaretUp.svelte';
import CaretUpDown from './CaretUpDown.svelte';
import Check from './Check.svelte';
import Clock from './Clock.svelte';
import Collapse from './Collapse.svelte';
import Cross from './Cross.svelte';
import DoubleCaretLeft from './DoubleCaretLeft.svelte';
import DoubleCaretRight from './DoubleCaretRight.svelte';
import Download from './Download.svelte';
import Edit from './Edit.svelte';
import Ellipsis from './Ellipsis.svelte';
import Emoji from './Emoji.svelte';
import Exclamation from './Exclamation.svelte';
import Expand from './Expand.svelte';
import FastForward from './FastForward.svelte';
import Filter from './Filter.svelte';
import Grabber from './Grabber.svelte';
import Help from './Help.svelte';
import Hide from './Hide.svelte';
import HighVolume from './HighVolume.svelte';
import Info from './Info.svelte';
import Italic from './Italic.svelte';
import LowVolume from './LowVolume.svelte';
import Lock from './Lock.svelte';
import Microphone from './Microphone.svelte';
import MidVolume from './MidVolume.svelte';
import Mute from './Mute.svelte';
import NoMicrophone from './NoMicrophone.svelte';
import Notification from './Notification.svelte';
import NoVideo from './NoVideo.svelte';
import OpenLink from './OpenLink.svelte';
import OrderedList from './OrderedList.svelte';
import Pause from './Pause.svelte';
import People from './People.svelte';
import Person from './Person.svelte';
import Phone from './Phone.svelte';
import Play from './Play.svelte';
import Refresh from './Refresh.svelte';
import Rewind from './Rewind.svelte';
import Search from './Search.svelte';
import Send from './Send.svelte';
import Settings from './Settings.svelte';
import Show from './Show.svelte';
import SkipBack from './SkipBack.svelte';
import SkipForward from './SkipForward.svelte';
import Star from './Star.svelte';
import StarOutline from './StarOutline.svelte';
import Subtract from './Subtract.svelte';
import Trash from './Trash.svelte';
import Underline from './Underline.svelte';
import Unlock from './Unlock.svelte';
import Upload from './Upload.svelte';
import VerticalEllipsis from './VerticalEllipsis.svelte';
import Video from './Video.svelte';
import Warning from './Warning.svelte';

export enum Icons {
  ADD = 'ADD',
  ARROW_DOWN = 'ARROW_DOWN',
  ARROW_LEFT = 'ARROW_LEFT',
  ARROW_RIGHT = 'ARROW_RIGHT',
  ARROW_UP = 'ARROW_UP',
  AT = 'AT',
  ATTACH = 'ATTACH',
  BOLD = 'BOLD',
  BULLETED_LIST = 'BULLETED_LIST',
  BUSINESS = 'BUSINESS',
  CALENDAR = 'CALENDAR',
  CARET_DOWN = 'CARET_DOWN',
  CARET_LEFT = 'CARET_LEFT',
  CARET_RIGHT = 'CARET_RIGHT',
  CARET_UP = 'CARET_UP',
  CARET_UP_DOWN = 'CARET_UP_DOWN',
  CHECK = 'CHECK',
  CLOCK = 'CLOCK',
  COLLAPSE = 'COLLAPSE',
  CROSS = 'CROSS',
  DOUBLE_CARET_LEFT = 'DOUBLE_CARET_LEFT',
  DOUBLE_CARET_RIGHT = 'DOUBLE_CARET_RIGHT',
  DOWNLOAD = 'DOWNLOAD',
  EDIT = 'EDIT',
  ELLIPSIS = 'ELLIPSIS',
  EMOJI = 'EMOJI',
  EXCLAMATION = 'EXCLAMATION',
  EXPAND = 'EXPAND',
  FAST_FORWARD = 'FAST_FORWARD',
  FILTER = 'FILTER',
  GRABBER = 'GRABBER',
  HELP = 'HELP',
  HIDE = 'HIDE',
  HIGH_VOLUME = 'HIGH_VOLUME',
  INFO = 'INFO',
  ITALIC = 'ITALIC',
  LOCK = 'LOCK',
  LOW_VOLUME = 'LOW_VOLUME',
  MICROPHONE = 'MICROPHONE',
  MID_VOLUME = 'MID_VOLUME',
  MUTE = 'MUTE',
  NO_MICROPHONE = 'NO_MICROPHONE',
  NOTIFICATION = 'NOTIFICATION',
  NO_VIDEO = 'NO_VIDEO',
  OPEN_LINK = 'OPEN_LINK',
  ORDERED_LIST = 'ORDERED_LIST',
  PAUSE = 'PAUSE',
  PEOPLE = 'PEOPLE',
  PERSON = 'PERSON',
  PHONE = 'PHONE',
  PLAY = 'PLAY',
  REFRESH = 'REFRESH',
  REWIND = 'REWIND',
  SEARCH = 'SEARCH',
  SEND = 'SEND',
  SETTINGS = 'SETTINGS',
  SHOW = 'SHOW',
  SKIP_BACK = 'SKIP_BACK',
  SKIP_FORWARD = 'SKIP_FORWARD',
  STAR = 'STAR',
  STAR_OUTLINE = 'STAR_OUTLINE',
  SUBTRACT = 'SUBTRACT',
  TRASH = 'TRASH',
  UNDERLINE = 'UNDERLINE',
  UNLOCK = 'UNLOCK',
  UPLOAD = 'UPLOAD',
  VERTICAL_ELLIPSIS = 'VERTICAL_ELLIPSIS',
  VIDEO = 'VIDEO',
  WARNING = 'WARNING'
}

export const IconMap = {
  ADD: Add,
  ARROW_DOWN: ArrowDown,
  ARROW_LEFT: ArrowLeft,
  ARROW_RIGHT: ArrowRight,
  ARROW_UP: ArrowUp,
  AT: At,
  ATTACH: Attach,
  BOLD: Bold,
  BULLETED_LIST: BulletedList,
  BUSINESS: Business,
  CALENDAR: Calendar,
  CARET_DOWN: CaretDown,
  CARET_LEFT: CaretLeft,
  CARET_RIGHT: CaretRight,
  CARET_UP: CaretUp,
  CARET_UP_DOWN: CaretUpDown,
  CHECK: Check,
  CLOCK: Clock,
  COLLAPSE: Collapse,
  CROSS: Cross,
  DOUBLE_CARET_LEFT: DoubleCaretLeft,
  DOUBLE_CARET_RIGHT: DoubleCaretRight,
  DOWNLOAD: Download,
  EDIT: Edit,
  ELLIPSIS: Ellipsis,
  EMOJI: Emoji,
  EXCLAMATION: Exclamation,
  EXPAND: Expand,
  FAST_FORWARD: FastForward,
  FILTER: Filter,
  GRABBER: Grabber,
  HELP: Help,
  HIDE: Hide,
  HIGH_VOLUME: HighVolume,
  INFO: Info,
  ITALIC: Italic,
  LOCK: Lock,
  LOW_VOLUME: LowVolume,
  MICROPHONE: Microphone,
  MID_VOLUME: MidVolume,
  MUTE: Mute,
  NO_MICROPHONE: NoMicrophone,
  NOTIFICATION: Notification,
  NO_VIDEO: NoVideo,
  OPEN_LINK: OpenLink,
  ORDERED_LIST: OrderedList,
  PAUSE: Pause,
  PEOPLE: People,
  PERSON: Person,
  PHONE: Phone,
  PLAY: Play,
  REFRESH: Refresh,
  REWIND: Rewind,
  SEARCH: Search,
  SEND: Send,
  SETTINGS: Settings,
  SHOW: Show,
  SKIP_BACK: SkipBack,
  SKIP_FORWARD: SkipForward,
  STAR: Star,
  STAR_OUTLINE: StarOutline,
  SUBTRACT: Subtract,
  TRASH: Trash,
  UNDERLINE: Underline,
  UNLOCK: Unlock,
  UPLOAD: Upload,
  VERTICAL_ELLIPSIS: VerticalEllipsis,
  VIDEO: Video,
  WARNING: Warning
};
