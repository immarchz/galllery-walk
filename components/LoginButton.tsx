"use client";
import { Button, Col, Row } from "antd";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function LoginButton() {
  const { data: session } = useSession();

  // const handleLogin = () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then((result) => {
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       if (credential != null) {
  //         const token = credential.accessToken;
  //         const user = result.user;
  //       }
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       const email = error.customData.email;
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //     });
  // };

  if (session && session.user) {
    return (
      <div className="">
        <Row justify={"end"} gutter={[8, 8]}>
          <Col className="mt-3" span={15}>
            <Row justify={"end"}>
              <Col
                className="text-white xl:text-lg"
                style={{ textAlign: "right", wordWrap: "break-word" }}
              >
                {session.user.name}
              </Col>
            </Row>
            <Row justify={"end"}>
              <Col>
                <button
                  disabled={false}
                  type={"button"}
                  className="flex flex-row-reverse mt-1 text-white xl:text-lg"
                  onClick={() => signOut()}
                >
                  Sign out
                </button>
              </Col>
            </Row>
          </Col>
          <Col span={9}>
            <Image
              src={`${session.user.image}`}
              alt=""
              width="100"
              height="100"
              className="flex rounded-full bg-white"
            />
          </Col>
        </Row>
        {/* <div className="flex flex-col pt-5 ">
          <div className="flex text-white">{session.user.name}</div>
          <button
            disabled={false}
            type={"button"}
            className="flex flex-row-reverse text-white "
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>

        <Image
          src={`${session.user.image}`}
          alt=""
          width="100"
          height="100"
          className="flex rounded-full bg-white"
        /> */}
      </div>
    );
  }
  return (
    <button onClick={() => signIn()} className="text-white">
      Sign In
    </button>
  );
}
