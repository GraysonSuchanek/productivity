import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Header.css";

function Header({ title, menu }) {
  let currentDay = new Date().toLocaleDateString("en-US", { day: "2-digit" });
  let currentMonth = new Date().toLocaleDateString("en-US", { month: "short" });

  return (
    <div class="container headerBoarder">
      <div class="row">
        <div class="col headerOption date">
          <div class="row">{currentDay}</div>
          <div class="row">{currentMonth}</div>
        </div>
        <div class="col-6 headerOption centerOption">{title}</div>
        <div class="col headerOption">MENU</div>
      </div>
    </div>
  );
}

export default Header;
