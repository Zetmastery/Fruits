import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 40,
    gap: 40,
  },
  align: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    paddingTop: 40,
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    paddingBottom: 40,
  },
  image: {width: 150, height: 150},
  text: {
    fontWeight: '700',
    color: 'black',
    fontSize: 16,
  },
});

export default styles;
