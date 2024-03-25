import { pipe, toPairs, groupBy, map } from 'ramda';
import AntD from 'react-native-vector-icons-variant/AntDesign';
import Entypo from 'react-native-vector-icons-variant/Entypo';
import EvilIcons from 'react-native-vector-icons-variant/EvilIcons';
import Feather from 'react-native-vector-icons-variant/Feather';
import FontAwesome from 'react-native-vector-icons-variant/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons-variant/FontAwesome5';
import Fontisto from 'react-native-vector-icons-variant/Fontisto';
import Foundation from 'react-native-vector-icons-variant/Foundation';
import Ionicons from 'react-native-vector-icons-variant/Ionicons';
import MaterialIcons from 'react-native-vector-icons-variant/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons-variant/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons-variant/Octicons';
import SimpleLineIcons from 'react-native-vector-icons-variant/SimpleLineIcons';
import Zocial from 'react-native-vector-icons-variant/Zocial';
import AntDGlyphs from 'react-native-vector-icons-variant/glyphmaps/AntDesign.json';
import EntypoGlyphs from 'react-native-vector-icons-variant/glyphmaps/Entypo.json';
import EvilIconsGlyphs from 'react-native-vector-icons-variant/glyphmaps/EvilIcons.json';
import FeatherGlyphs from 'react-native-vector-icons-variant/glyphmaps/Feather.json';
import FontAwesomeGlyphs from 'react-native-vector-icons-variant/glyphmaps/FontAwesome.json';
import FontAwesome5Glyphs from 'react-native-vector-icons-variant/glyphmaps/FontAwesome5Free.json';
import FontistoGlyphs from 'react-native-vector-icons-variant/glyphmaps/Fontisto.json';
import FoundationGlyphs from 'react-native-vector-icons-variant/glyphmaps/Foundation.json';
import IoniconsGlyphs from 'react-native-vector-icons-variant/glyphmaps/Ionicons.json';
import MaterialIconsGlyphs from 'react-native-vector-icons-variant/glyphmaps/MaterialIcons.json';
import MaterialCommunityIconsGlyphs from 'react-native-vector-icons-variant/glyphmaps/MaterialCommunityIcons.json';
import OcticonsGlyphs from 'react-native-vector-icons-variant/glyphmaps/Octicons.json';
import SimpleLineIconsGlyphs from 'react-native-vector-icons-variant/glyphmaps/SimpleLineIcons.json';
import ZocialGlyphs from 'react-native-vector-icons-variant/glyphmaps/Zocial.json';

const GLYPH_MAPS = {
  AntD: AntDGlyphs,
  Entypo: EntypoGlyphs,
  EvilIcons: EvilIconsGlyphs,
  Feather: FeatherGlyphs,
  FontAwesome: FontAwesomeGlyphs,
  FontAwesome5: FontAwesome5Glyphs,
  Fontisto: FontistoGlyphs,
  Foundation: FoundationGlyphs,
  Ionicons: IoniconsGlyphs,
  MaterialIcons: MaterialIconsGlyphs,
  MaterialCommunityIcons: MaterialCommunityIconsGlyphs,
  Octicons: OcticonsGlyphs,
  SimpleLineIcons: SimpleLineIconsGlyphs,
  Zocial: ZocialGlyphs,
};

const ICON_SETS = {
  AntD,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

const groupGlyphNames = glyphMap =>
  Object.values(groupBy(name => glyphMap[name])(Object.keys(glyphMap)));

const transformIconSets = pipe(
  toPairs,
  map(([name, component]) => ({
    name,
    component,
    glyphNames: groupGlyphNames(GLYPH_MAPS[name]),
  }))
);

export default transformIconSets(ICON_SETS);
