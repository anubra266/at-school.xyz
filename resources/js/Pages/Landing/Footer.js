import React from "react";

function Footer() {
    return (
        <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
                <div className="border-top pt-5">
                    <p>
                        Copyright &copy;
                        <script>
                            document.write(new Date().getFullYear());
                        </script>{" "}
                        All rights reserved{" "}
                        <a href="https://github.com/anubra266" target="_blank">
                            @anubra266
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
