import "./ContractUp.css";

function ContractUp() {
  return (
    <div className="bg-dark text-white">
      <div className="d-flex flex-wrap container justify-content-between pt-2">
        <div>
          <p className="contract">
            <span className="text-color text-danger">Free Call </span>
            <span className=" ">+1 234567890</span>
          </p>
        </div>
        <div>
          <small>
            <ul className="d-flex gap-4 d-flex container justify-content-between align-items-center">
              <li className="contract_socialmedia ">FACEBOOK</li>
              <li className="contract_socialmedia ">TWITTER</li>
              <li className="contract_socialmedia ">DRIBBBLE</li>
            </ul>
          </small>
        </div>
      </div>
    </div>
  );
}

export default ContractUp;
