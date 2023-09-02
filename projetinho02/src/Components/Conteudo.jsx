export default function Conteudo(props) {
    return(
        <>
        <p>{props.propsNovo}</p>
        <section>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod voluptatem eligendi consequatur magnam suscipit at vero eveniet eaque facilis, ea mollitia aspernatur officia dolores excepturi numquam tempora. Veniam, repellendus.</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sunt explicabo vero itaque nihil voluptate assumenda necessitatibus nobis! At dolore neque obcaecati dolores nemo itaque veritatis maiores. Odit, cum nulla.</p>
        </div>
        <div>
          <img src={props.uriLogoReact} alt={props.altLogoReact} />
        </div>
      </section>
      </>
    )
}
