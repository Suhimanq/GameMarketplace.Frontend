import Avatar from "@mui/material/Avatar/Avatar";
import styles from "./page.module.scss";
import TextField from "@mui/material/TextField/TextField";
import { SquarePlus } from "lucide-react";
import { Button } from "@mui/base/Button/Button";
import { useTranslations } from "next-intl";

export default function ChatPage() {
  const t = useTranslations("ChatPage");
  const textFieldStyles = {
    width: "80%",
    display: "flex",
    justifyContent: "flex-end",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
      "& input": {
        color: "#c4c4c4",
      },
    },
  };
  return (
    <div className={styles.chat_body}>
      <div className={styles.left_block}>
        <div className={styles.chat_block}>
          <div className={styles.chat_title}>{t("chat_title")}</div>
          <div className={styles.chat_item}>
            <div className={styles.chat_avatar}>
              <Avatar
                sx={{ bgcolor: "orange" }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              />
            </div>
            <div className={styles.chat_nickname}>Mike</div>
          </div>
          <div className={styles.chat_item}>
            <div className={styles.chat_avatar}>
              <Avatar
                sx={{ bgcolor: "orange" }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              />
            </div>
            <div className={styles.chat_nickname}>Mike</div>
          </div>
          <div className={styles.chat_item}>
            <div className={styles.chat_avatar}>
              <Avatar
                sx={{ bgcolor: "orange" }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              />
            </div>
            <div className={styles.chat_nickname}>Mike</div>
          </div>
          <div className={styles.chat_item}>
            <div className={styles.chat_avatar}>
              <Avatar
                sx={{ bgcolor: "orange" }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              />
            </div>
            <div className={styles.chat_nickname}>Mike</div>
          </div>
          <div className={styles.chat_item}>
            <div className={styles.chat_avatar}>
              <Avatar
                sx={{ bgcolor: "orange" }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              />
            </div>
            <div className={styles.chat_nickname}>Mike</div>
          </div>
        </div>
      </div>
      <div className={styles.right_block}>
        <div className={styles.massage_block}>
          <div className={styles.massage_title}>
            <div className={styles.massage_avatar}>
              <Avatar
                sx={{ bgcolor: "orange" }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              />
            </div>
            <div className={styles.massage_nickname}>Mike</div>
          </div>
          <div className={styles.massage_content}>
            <div className={styles.massage_box}>
              <div className={styles.message_content_send}>
                <div className={styles.message_send}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor quo eum voluptatum. Quaerat voluptatum dolores officia
                  esse et accusamus eius rem natus voluptatem ut consequatur non
                  reiciendis, impedit enim explicabo maiores dolor minus
                  voluptates neque eveniet quo commodi dicta error numquam!
                  Consequatur id voluptas cum deleniti tempora aut temporibus
                  labore, tempore quisquam soluta. Perferendis vero nobis
                  accusantium officia, reiciendis mollitia, esse saepe magnam
                  modi quae ducimus quis quam dolore! Saepe laborum beatae,
                  natus quia nostrum delectus mollitia fugit consequatur non
                  pariatur. Velit adipisci quam quae, iusto illum laborum
                  pariatur voluptatem possimus consequatur iure soluta placeat
                  voluptatum magni ad ipsam quibusdam nulla? Molestias veniam
                  corrupti adipisci laborum ab dignissimos aliquam mollitia
                  autem nulla culpa delectus vel praesentium tempora et ad
                  exercitationem, unde voluptate odio. Quaerat modi omnis illum
                  iure delectus, sunt ea. Iste libero dolorem quidem consequatur
                  ipsam dolor vero ullam temporibus consectetur debitis numquam
                  hic est doloremque, quos a dolorum sed deserunt quod. Ipsam
                  hic perspiciatis, omnis error eveniet, expedita itaque magnam,
                  non consectetur totam quis? Consequuntur minima doloribus
                  officiis. Neque debitis cumque quos molestiae, mollitia quasi
                  vitae excepturi dolore aliquid, quas sequi. Necessitatibus sit
                  alias corporis assumenda. Illum veritatis quas ab itaque quae,
                  corporis maiores modi quia? Quibusdam, impedit!
                </div>
                <Avatar
                  src="/broken-image.jpg"
                  className={styles.avatar_message_send}
                />
              </div>
              <div className={styles.message_content_get}>
                <Avatar
                  src="/broken-image.jpg"
                  className={styles.avatar_message_get}
                />
                <div className={styles.messege_get}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nisi, nam ex, asperiores nesciunt modi nulla suscipit ducimus
                  nemo magni veritatis deleniti inventore perferendis id omnis
                  autem! Ea architecto quasi minima debitis itaque fuga rerum
                  amet temporibus porro earum doloribus, nihil molestiae optio,
                  beatae dolore incidunt minus maxime illo est maiores? Esse
                  quod natus perferendis facere optio sit provident! Consequatur
                  repudiandae cum doloremque, dolore enim corporis incidunt eum
                  quia error ducimus id quos sed maxime ex vel quis, magnam unde
                  at. Impedit ex tempore accusamus obcaecati eaque delectus quia
                  amet, voluptatibus maxime ea ipsam, beatae enim dolores
                  cupiditate placeat repudiandae optio consectetur doloremque
                  error dolor nihil! Odit ab quisquam totam dolore modi, sint
                  quas unde nesciunt ratione architecto molestiae tempore?
                  Debitis exercitationem earum a voluptatum aut facere numquam
                  quisquam nemo consequuntur. Sunt omnis placeat incidunt modi
                  temporibus deserunt, ipsam nemo perferendis officia tempore
                  minus alias unde dolore nisi est rerum error voluptates
                  aperiam! Ex, hic qui similique aspernatur odio eveniet
                  doloremque quod accusamus voluptas quas error placeat beatae
                  expedita illum impedit numquam aperiam quos minus! Repellendus
                  itaque earum atque perspiciatis maiores placeat incidunt,
                  delectus nobis iusto ratione nostrum tenetur temporibus alias
                  quas qui debitis totam? Asperiores nulla corrupti sunt rerum
                  mollitia?
                </div>
              </div>
            </div>
            <div className={styles.massage_field}>
              <SquarePlus className={styles.icon} />
              <TextField variant="outlined" sx={textFieldStyles} />
              <Button className={styles.enter_btn}>Отправить</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
