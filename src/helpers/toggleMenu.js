export default function Toggle(ref, setState) {
    return function (e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setState(false);
      }
    };
  }