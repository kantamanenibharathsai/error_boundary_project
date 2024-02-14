const counterStyles = {
  mainContainer: {
    width: "100%",
    height: "100vh",
  },

  counterAppText: {
    fontSize: "30px",
    textAlign: "center",
    mt: "30px"
  },

  childContainer: {
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // border: "2px solid red",
    height: "90vh",
  },

  countBtnsContainer: {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: "8px",
    padding: "60px",
    display: "flex",
    flexDirection: "column",
    gap: '30px'
  },

  countContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",

  },

  btnsContainer: {
    display: "flex",
    gap: "15px",
  },

  countText: {
    fontSize: "25px",
    color: "black",
    fontWeight: "500",
  },

  countValue: {
    fontSize: "25px",
    color: "green",
    fontWeight: "600",
  },
};

export default counterStyles;
