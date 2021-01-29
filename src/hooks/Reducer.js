const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (!state) {
        return [action.note];
      }
      return [...state, action.note];
    case "FETCH":
      return action.notesData;
    case "CHECK_TAG":
      let tagis = [];
      action.db.forEach((ele) => {
        let temp = ele.h.split(" ");
        temp.forEach((el) => {
          if (el.includes("/")) {
            el.split("/").forEach((txt, ind, arr) => {
              if (ind === 0) {
                return tagis.push({
                  txt: txt,
                  lvl: 0,
                  parent: el
                });
              } else {
                return tagis.push({
                  txt: txt,
                  lvl: ind,
                  parent: el
                });
              }
            });
          } else {
            tagis.push({ txt: el, lvl: 0, parent: el });
          }
        });
      });
      let tagisClean = tagis.filter((ele, ind, self) => {
        return (
          ind === self.findIndex((t) => t.txt === ele.txt && t.lvl === ele.lvl)
        );
      });
      const sortings = (a, b) => {
        if (a.parent < b.parent) {
          return -1;
        }
        if (a.parent > b.parent) {
          return 1;
        }
        if (a.parent === b.parent) {
          if (a.lvl < b.lvl) {
            return -1;
          }
          if (a.lvl > b.lvl) {
            return 1;
          }
          if (a.lvl === b.lvl) {
            if (a.txt < b.txt) {
              return -1;
            }
            if (a.txt > b.txt) {
              return 1;
            }
          }
        }
        return 0;
      };
      return tagisClean.sort(sortings);

    case "CHECK_TAGS":
      let tagi = [];
      action.db.forEach((ele) => {
        let temp = ele.h.split(" ");
        temp.forEach((el) => {
          if (el.includes("/")) {
            const count = el.split("/").length - 1;
            el.split("/").forEach((txt, ind, arr) => {
              if (ind === count) {
                tagi.push({
                  txt: txt,
                  lvl: ind,
                  parent: arr.slice(0, ind).join(" "),
                  child: "no"
                });
              }
              if (ind === 0) {
                tagi.push({ txt: txt, lvl: ind, parent: txt, child: "yes" });
              } else {
                tagi.push({
                  txt: txt,
                  lvl: ind,
                  parent: arr.slice(0, ind).join(" "),
                  child: "yes"
                });
              }
            });
          } else {
            tagi.push({ txt: el, lvl: 0, parent: el, child: "no" });
          }
        });
      });
      let tagiClean = tagi.filter((ele, ind, self) => {
        return (
          ind === self.findIndex((t) => t.txt === ele.txt && t.lvl === ele.lvl)
        );
      });
      const sorting = (a, b) => {
        if (a.parent < b.parent) {
          return -1;
        }
        if (a.parent > b.parent) {
          return 1;
        }
        if (a.parent === b.parent) {
          if (a.lvl < b.lvl) {
            return -1;
          }
          if (a.lvl > b.lvl) {
            return 1;
          }
          if (a.lvl === b.lvl) {
            if (a.txt < b.txt) {
              return -1;
            }
            if (a.txt > b.txt) {
              return 1;
            }
          }
        }
        return 0;
      };
      return tagiClean.sort(sorting);
    case "CHECK_DATES":
      let dates = [];
      action.db.forEach((ele) => {
        if (ele.c) {
          dates.push(ele.c);
        }
        if (ele.d) {
          dates.push(ele.d);
        }
      });
      const unique = new Set(dates);
      return [...unique].sort();
    default:
      return state;
  }
};

export default Reducer;
